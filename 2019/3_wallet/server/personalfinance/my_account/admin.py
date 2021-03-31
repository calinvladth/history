from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account, ProfileSettings, Currency


class AccountAdmin(UserAdmin):
    list_display = ('email', 'username', 'is_active', 'last_login')
    search_fields = ('email', 'username')
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = (
        ('Personal info', {'fields': ('username', 'email')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Permissions', {'fields': ('is_active', 'is_admin')}),
    )


admin.site.register(Account, AccountAdmin)
admin.site.register(Currency)
admin.site.register(ProfileSettings)
