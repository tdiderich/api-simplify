# coding=utf-8

from flask import Flask, jsonify, request
from .entities.entity import Session, engine, Base
from .entities.api_call import ApiCall, ApiCallSchema
from flask_cors import CORS
from .auth import AuthError, requires_auth

# creating the Flask application
app = Flask(__name__)
CORS(app)

# if needed, generate database schema
Base.metadata.create_all(engine)

###
# NEW FOR API CALLS
###

@app.route('/apicall')
def get_api_call():
    # fetching from the database
    session = Session()
    api_call_objects = session.query(ApiCall).all()

    # transforming into JSON-serializable objects
    schema = ApiCallSchema(many=True)
    apicalls = schema.dump(api_call_objects)

    # serializing as JSON
    session.close()
    return jsonify(apicalls.data)


@app.route('/apicall', methods=['POST'])
# @requires_auth
def add_api_call():
    # mount apicall object
    posted_api_call = ApiCallSchema(only=('name', 'endpoint', 'headers', 'parameters'))\
        .load(request.get_json())

    apicall = ApiCall(**posted_api_call.data, created_by="HTTP post request")

    # persist apicall
    session = Session()
    session.add(apicall)
    session.commit()

    # return created apicall
    new_api_call = ApiCallSchema().dump(apicall).data
    session.close()
    return jsonify(new_api_call), 201

@app.route('/apicall/<int:api_call_id>')
def get_specific_api_call(api_call_id):
    # fetching from the database
    session = Session()
    api_call_objects = session.query(ApiCall).filter(ApiCall.id == api_call_id)

    # transforming into JSON-serializable objects
    schema = ApiCallSchema(many=True)
    apicall = schema.dump(api_call_objects)

    # serializing as JSON
    session.close()
    return jsonify(apicall.data)

# @app.errorhandler(AuthError)
# def handle_auth_error(ex):
#     response = jsonify(ex.error)
#     response.status_code = ex.status_code
#     return response
