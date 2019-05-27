#!/usr/bin/env python
import requests, json
from json_logic import jsonLogic


def api_hitter():
        rule = {">" : [ { "var" : "value" }, 100 ]}
        headers={"X-RapidAPI-Host": "community-bitcointy.p.rapidapi.com", "X-RapidAPI-Key": "957f841dc2mshd1045a90ddd01acp1de9e8jsn99cfc0c07a06"}
        endpoint = "https://community-bitcointy.p.rapidapi.com/convert/1/USD"
        r = requests.get(endpoint,headers=headers)
        json_data = r.json()
        rule_result = jsonLogic(rule, json_data)



        if rule_result == True:
            payload = {"text":"You had a hit on your logic: ```%s```Here's the payload: ```%s```" % (rule, r.text)}

            response = requests.post(
                url="https://hooks.slack.com/services/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",
                json=payload
            )

api_hitter()
