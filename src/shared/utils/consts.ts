export const ERROR = {
  PRISMA: {
    AUTH_NOT_UNIQUE: "A new user cannot be created with this email"
  },
  SERVER: {
    INTERNAL_ERROR: "Internal Server Error",
    GENERAL_ERROR: "Something went wrong",
    INVALID_CREDENTIALS: "Invalid credentials"
  },
  CUSTOM: {
    CAN_NOT_GET_USER: "Canno't get user"
  }
}

export const ERROR_CODE = {
  PRISMA: {
    P2002: 'P2002'
  }
}

export const AVAILABLE_URL_NOT_ACTIVE_USER  = [
  "/settings"
];

export const TRANSLATE = {
  SETTINGS_PAGE: {
    ACTIVATE: "Activate",
    DESCRIPTION: {
      FIRST: "An activation email has been sent to your email.",
      SECOND: "You can request a repeat activation email after 24 hours."
    },
  },
  ACTIVATE_ACCOUNT: {
    TITLE: "Activate account",
    DESCRIPTION: "Checking user activation link",
    ERROR: "User activation error",
    GO_HOME: "Go to home",
  }
}