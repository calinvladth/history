from accounts.models import Account
from functools import wraps

from accounts.models import Account
from .response import custom_response
from rest_framework import status


def account_is_admin(pk):
    account = Account.objects.get(id=pk)
    if not account.is_staff:
        raise PermissionError('You can\'t perform this action')

    return account


def write_permissions(function):
    @wraps(function)
    def wrap(self, request, *args, **kwargs):
        try:
            account = Account.objects.get(id=request.user.id)
            if not account.is_staff:
                raise PermissionError('You can\'t perform this action')
            return function(self, request, *args, **kwargs)

        except Exception as e:
            return custom_response(
                message='You can\'t perform this action',
                status=status.HTTP_400_BAD_REQUEST
            )

    return wrap


# def check_admin(function):
#     @wraps(function)
#     def wrap(self, request, *args, **kwargs):
#         try:
#             account = Account.objects.get(id=request.user.id)
#             if not account.is_staff:
#                 raise PermissionError('You can\'t perform this action')
#             return function(self, request, *args, **kwargs)
#         except Exception as e:
#             return custom_response(
#                 message=str(e),
#                 status=status.HTTP_400_BAD_REQUEST
#             )
#
#     return wrap


def check_account(function):
    @wraps(function)
    def wrap(self, request, *args, **kwargs):
        try:
            Account.objects.get(id=request.user.id)
            return function(self, request, *args, **kwargs)
        except Exception as e:
            return custom_response(
                message=str(e),
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    'is_authenticated': False,
                    'token': None
                }
            )

    return wrap
