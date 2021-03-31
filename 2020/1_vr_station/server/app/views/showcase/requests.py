from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..key_check.functions import check_key
from ...models import ShowCase
from .serializer import ShowCaseSerializer


class GET_SHOWCASE(APIView):
    def get(self, request):
        # Check if Authorization key matches the created key
        key = request.headers.get('Authorization')
        ck = check_key(key)

        if not ck['success']:
            return Response({
                'success': ck['success'],
                'message': ck['message']
            })

        model = ShowCase.objects.all().first()
        showcase = ShowCaseSerializer(model).data

        return Response({
            'success': True,
            'message': 'Showcase fetched successfully',
            'data': showcase
        })