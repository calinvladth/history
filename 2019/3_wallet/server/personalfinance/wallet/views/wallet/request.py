from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from ...models import Wallet
from ...serializers import WalletSerializer

# Create / Read / Update wallet


class GetPost(APIView):

    def get(self, request):
        model = Wallet.objects.filter(primary=True, belongs_to=request.user.pk)
        serializer = WalletSerializer(model, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['belongs_to'] = request.user.pk
        wallet_serializer = WalletSerializer(data=request.data)

        if wallet_serializer.is_valid():
            wallet_serializer.save()
            return Response({'success': True, 'message': 'Wallet was created successfully'}, status=status.HTTP_201_CREATED)

        else:
            return Response(wallet_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetByPkPut(APIView):

    def get(self, request, pk):
        model = Wallet.objects.get(pk=pk)
        serializer = WalletSerializer(model)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        model = Wallet.objects.get(pk=pk)
        serializer = WalletSerializer(model, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Wallet was updated successfully'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
