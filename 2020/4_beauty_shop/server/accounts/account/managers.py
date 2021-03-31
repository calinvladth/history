import secrets
import string

from django.contrib.auth.base_user import BaseUserManager


class AccountManager(BaseUserManager):

    def get(self, *args, **kwargs):
        obj = self.filter(*args, **kwargs).first()
        if not obj:
            raise ValueError('Account not found')
        return obj

    def create_superuser(self, email, password, **kwargs):
        kwargs['is_admin'] = True
        kwargs['is_staff'] = True
        email = self.normalize_email(email)

        account = self.model(email=email, **kwargs)
        account.set_password(password)
        account.save()
        return account

    def create_admin(self, creator, **kwargs):
        if 'is_staff' not in kwargs:
            kwargs['is_staff'] = False

        # Generate a random password
        # Email the new account to the user
        alphabet = string.ascii_letters + string.digits
        kwargs['password'] = ''.join(secrets.choice(alphabet) for i in range(10))
        kwargs['is_admin'] = True
        kwargs['creator'] = creator

        return self.model.objects.create(**kwargs)

    def create(self, email, password, **kwargs):

        if not email:
            raise ValueError('The Email is invalid')

        if not password:
            raise ValueError('The Password is invalid')

        if 'creator' not in kwargs:
            kwargs['is_staff'] = False
            kwargs['is_admin'] = False
        elif not kwargs['creator'].is_staff:
            raise PermissionError('You are not allowed to perform this action')

        else:
            del (kwargs['creator'])

        email = self.normalize_email(email)

        account = self.model(email=email, **kwargs)
        account.set_password(password)
        account.save()
        return account

    def edit(self, pk, email, password):
        obj = self.model.objects.get(pk=pk)
        if password:
            obj.set_password(password)
        if email:
            obj.email = self.normalize_email(email)

        obj.save()
        return obj
