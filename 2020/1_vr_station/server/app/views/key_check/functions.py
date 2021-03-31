from ...models import EnterKey


def check_key(key):
    model = EnterKey.objects.filter(key=key).first()

    if model:
        success = True
        message = 'Key is matching'
    else:
        success = False
        message = 'Key is invalid or is missing'

    return {
        'success': success,
        'message': message
    }
