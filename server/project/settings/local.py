from .base import *  # noqa: F401, F403

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
DEBUG = True
ACCOUNT_EMAIL_VERIFICATION = "optional"
