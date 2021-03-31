from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from ...models import WalletActivity, Wallet
from ...serializers import GetWalletActivitySerializer, WalletActivitySerializer, WalletSerializer
from django.core.paginator import Paginator
# Create / Read / Update / Delete activity


class GetCreate(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # GET WALLET PK
        wallet_model = Wallet.objects.get(belongs_to=request.user.pk)
        wallet_pk = WalletSerializer(wallet_model).data['id']

        model = WalletActivity.objects.filter(wallet=wallet_pk, belongs_to=request.user.pk).order_by('created_at').reverse()

        # Paginator
        limit = 5

        paginator = Paginator(model, limit)
        pages = paginator.num_pages
        page = request.GET.get('page') or 1
        if int(page) > pages:
            page = pages
        if int(page) < 1:
            page = 1

        data = paginator.get_page(page)

        serializer = GetWalletActivitySerializer(data, many=True)

        return Response({'data': serializer.data, 'pages': pages, 'page': int(page)}, status=status.HTTP_200_OK)

    def post(self, request):

        # key points:
        # 0 = initial
        # 1 = updated
        # wallet_0 / wallet_1
        # activity

        # Check if the request ammount is valid
        if type(request.data.get('amount')) is not int and type(request.data.get('amount')) is not float:
            return Response({'success': False, 'message': 'Your amount number is not valid'}, status=status.HTTP_400_BAD_REQUEST)


        # GET WALLET PK
        wallet_model = Wallet.objects.get(belongs_to=request.user.pk)
        wallet_pk = WalletSerializer(wallet_model).data['id']

        wallet_0 = dict()
        wallet_1 = dict()
        activity = dict()

        activity['belongs_to'] = request.user.pk
        activity['wallet'] = wallet_pk
        activity['amount'] = request.data.get('amount')
        activity['revenue'] = request.data.get('revenue')
        activity['category'] = request.data.get('category')
        activity['additional_info'] = request.data.get('additional_info') or ""

        # Get the amount and the transaction type
        # Get the wallet current account
        # Based on the transaction type, update the wallet account and create the wallet_activity

        wallet = Wallet.objects.get(belongs_to=request.user.pk)
        wallet_0['account'] = WalletSerializer(wallet).data['account']

        if activity['revenue']:
            wallet_1['account'] = wallet_0['account'] + activity['amount']

        if not activity['revenue']:
            wallet_1['account'] = wallet_0['account'] - activity['amount']

        wallet_serializer = WalletSerializer(wallet, data=wallet_1, partial=True)

        if wallet_serializer.is_valid():
            activity_serializer = WalletActivitySerializer(data=activity)

            if activity_serializer.is_valid():
                wallet_serializer.save()
                activity_serializer.save()
                return Response({'success': True, 'message': 'Transaction was created successfully'}, status=status.HTTP_201_CREATED)

            else:
                return Response({'success': False, 'message': 'Transaction was not created'}, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response({'success': False, 'message': 'There was a problem with your account'}, status=status.HTTP_400_BAD_REQUEST)


class PutDelete(APIView):

    def put(self, request, pk):
        # key points:
        # 0 = initial value
        # 1 = updated value
        # 2 = final value
        # wallet_0 / wallet_1 / wallet_2
        # activity_0 / activity_1

        # Check if the request ammount is valid
        if type(request.data.get('amount')) is not int and type(request.data.get('amount')) is not float:
            return Response({'success': False, 'message': 'You must enter a valid number'}, status=status.HTTP_400_BAD_REQUEST)

        # Update wallet when an action is updated

        wallet_0 = dict()
        wallet_1 = dict()
        wallet_2 = dict()

        wallet = Wallet.objects.get(belongs_to=request.user.pk)
        wallet_pk = WalletSerializer(wallet).data['id']

        # Get the current wallet account
        wallet_0['account'] = WalletSerializer(wallet).data['account']

        # Get the last wallet activity
        activity = WalletActivity.objects.get(pk=pk)
        activity_0 = WalletActivitySerializer(activity).data

        # Get the updated activity
        activity_1 = request.data

        # If the requested activity represents a negative number instead of a negative type, return an error
        if request.data.get('amount') < 0:
            return Response({
                'success': False,
                'message': 'A negative amount is not accepted on your transaction.'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Remove the last transaction from the wallet
        if activity_0['revenue']:
            wallet_1['account'] = wallet_0['account'] - activity_0['amount']
        if not activity_0['revenue']:
            wallet_1['account'] = wallet_0['account'] + activity_0['amount']

        # Update the wallet based on the current transaction parameters
        if activity_1['revenue']:
            wallet_2['account'] = wallet_1['account'] + activity_1['amount']
        if not activity_1['revenue']:
            wallet_2['account'] = wallet_1['account'] - activity_1['amount']

        wallet_serializer = WalletSerializer(wallet, data=wallet_2, partial=True)

        if wallet_serializer.is_valid():
            activity_1['belongs_to'] = request.user.pk
            activity_1['wallet'] = wallet_pk
            activity_serializer = WalletActivitySerializer(activity, data=activity_1, partial=False)
            if activity_serializer.is_valid():
                wallet_serializer.save()
                activity_serializer.save()
                return Response({'success': True, 'message': 'Transaction was updated successfully'}, status=status.HTTP_200_OK)

            else:
                return Response({'success': False, 'message': 'Transaction was not updated'}, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response({'success': False, 'message': 'There was a problem with your account'}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        # key points
        # 0 = initial value
        # 1 = updated value
        # wallet_0 / wallet_1
        # activity_0
        # revenue_0

        wallet_0 = dict()
        wallet_1 = dict()

        # Update Wallet when an action is deleted
        # When the wallet_activity is deleted, the action is reversed from the wallet
        activity = WalletActivity.objects.get(pk=pk)
        activity_serializer = WalletActivitySerializer(activity)
        wallet = Wallet.objects.get(belongs_to=request.user.pk)
        wallet_0['account'] = WalletSerializer(wallet).data['account']

        if activity_serializer.data['revenue']:
            # Subtract the activity amount from the wallet
            wallet_1['account'] = wallet_0['account'] - activity_serializer.data['amount']

        if not activity_serializer.data['revenue']:
            # Add the activity amount to the wallet
            wallet_1['account'] = wallet_0['account'] + activity_serializer.data['amount']

        wallet_serializer = WalletSerializer(wallet, data=wallet_1, partial=True)
        if wallet_serializer.is_valid():
            activity.delete()
            wallet_serializer.save()
            return Response({'success': True, 'message': 'Transaction was deleted successfully'}, status=status.HTTP_202_ACCEPTED)

        return Response({'success': False, 'message': 'Transaction was not deleted'},
                        status=status.HTTP_400_BAD_REQUEST)

