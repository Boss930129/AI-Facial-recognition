'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['localhost']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

CORS_ORIGIN_WHITELIST = (
    'localhost:3000',
)

STRIPE_PUBLISH_KEY = ''
STRIPE_SECRET_KEY = ''
