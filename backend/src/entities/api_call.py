# coding=utf-8

from marshmallow import Schema, fields

from sqlalchemy import Column, String

from .entity import Entity, Base


class ApiCall(Entity, Base):
    __tablename__ = 'apicall'

    name = Column(String)
    endpoint = Column(String)
    headers = Column(String)
    parameters = Column(String)

    def __init__(self, name, endpoint, headers, parameters, created_by):
        Entity.__init__(self, created_by)
        self.endpoint = endpoint
        self.headers = headers
        self.name = name
        self.parameters = parameters

class ApiCallSchema(Schema):
    id = fields.Number()
    endpoint = fields.Str()
    headers = fields.Str()
    parameters = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
