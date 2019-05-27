#!/usr/bin/env python

from apscheduler.schedulers.blocking import BlockingScheduler
import requests
from json_logic import jsonLogic


### takes user inputs to build the headers
def header_builder():
    more_headers = True
    headers = {}
    while more_headers:
        print("Let's build the headers for your API call...")

        ### checks for valid header key to avoid duplicates
        while True:
            header_key = raw_input("What is the header key? ")
            if (header_key in headers):
                print("You put: %s. This is a duplicate value. " % header_key)
                continue
            else:
                break

        header_value = raw_input("What is the header value? ")
        headers[header_key] = header_value

        # this loop checks for true / false and validates the input
        while True:
            more_headers = raw_input("Do you have more headers to add? True or False ")
            if (more_headers.lower() != "true") and (more_headers.lower() != "false"):
                print("You put: %s. Please input True or False. " % more_headers)
                continue
            else:
                break

        if more_headers.lower() == "true":
            more_headers = True
        else:
            more_headers = False

    return headers

### function to build the rule logic
def rule_builder():
    # function to build the rules
    field = raw_input("Which field would you like to monitor? ")
    operator = raw_input("What type of boolean would you like to use? ")
    hit = raw_input("What is the value you'd like the rule to fire on? ")

    # creates rule
    rule = {operator : [ { "var"  : field}, hit]}

    return rule


### get user inputs to generate values needed for API call + rule logic
endpoint = raw_input("What is the URL for the API endpoint you'd like to hit? ")
headers = header_builder()
rule = rule_builder()


def main():
    ### hits the API on a timed interval
    def api_hitter(endpoint, headers, rule):
        r = requests.get(endpoint,headers=headers)
        json_data = r.json()
        rule_result = jsonLogic(rule, json_data)

        if rule_result == True:
            # make json for post to slack
            payload = {"text":"You had a hit on your logic: ```%s```Here's the payload: ```%s```" % (rule, r.text)}

            # post to slack
            response = requests.post(
                url="https://hooks.slack.com/services/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",
                json=payload
            )

    ### schedule the frequency of the API calls + rule logic testing
    scheduler = BlockingScheduler()
    scheduler.add_job(api_hitter, 'interval', args=[endpoint, headers, rule], seconds=10)
    scheduler.start()

if __name__ == '__main__':
    main()
