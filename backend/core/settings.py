import os
import sys
from pathlib import Path

from dotenv import dotenv_values

config = {**dotenv_values()}

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = config['SECRET_KEY']

DEBUG = config['DEBUG'].lower() in ('true', '1', 't', 'y')

ALLOWED_HOSTS = config['ALLOWED_HOSTS'].split(' ')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',

    'callbacks',
    'questions',
    'products',
    'settings',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOW_CREDENTIALS = True

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 100,
}

LANGUAGE_CODE = config['LANGUAGE_CODE']

TIME_ZONE = config['TIME_ZONE']

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

EMAIL_BACKEND = config['EMAIL_BACKEND']

EMAIL_HOST = config['EMAIL_HOST']

EMAIL_PORT = config['EMAIL_PORT']

EMAIL_HOST_USER = config['EMAIL_HOST_USER']

EMAIL_HOST_PASSWORD = config['EMAIL_HOST_PASSWORD']

EMAIL_USE_TLS = config['EMAIL_USE_TLS'].lower() in ('true', '1', 't', 'y')

EMAIL_USE_SSL = config['EMAIL_USE_SSL'].lower() in (
    'true', '1', 't', 'y')

RECIPIENT_LIST = config['RECIPIENT_LIST'].split(' ')

STATIC_ROOT = BASE_DIR / '.static/'

STATIC_URL = '/staticfiles/'

MEDIA_ROOT = BASE_DIR / '.media/'

MEDIA_URL = '/media/'
