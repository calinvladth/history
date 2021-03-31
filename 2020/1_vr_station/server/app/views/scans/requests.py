from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .functions import get_scan_by_pk
from ..key_check.functions import check_key
from ...models import Scans
from .serializer import ScanSerializer


class GET_SCANS(APIView):
    def get(self, request):
        # Check if Authorization key matches the created key
        key = request.headers.get('Authorization')
        ck = check_key(key)

        if not ck['success']:
            return Response({
                'success': ck['success'],
                'message': ck['message']
            }, status=status.HTTP_400_BAD_REQUEST)

        model = Scans.objects.all()
        scans = ScanSerializer(model, many=True).data
        return Response({
            'success': True,
            'message': 'Scans fetched successfully',
            'data': scans
        }, status=status.HTTP_200_OK)


class GET_SCAN_BY_PK(APIView):
    def get(self, request, pk):
        # Check if Authorization key matches the created key
        key = request.headers.get('Authorization')
        ck = check_key(key)

        if not ck['success']:
            return Response({
                'success': ck['success'],
                'message': ck['message']
            }, status=status.HTTP_400_BAD_REQUEST)

        data = get_scan_by_pk(pk)

        return Response({
            'success': data['success'],
            'message': data['message'],
            'data': data  if data['success'] else []
        })
