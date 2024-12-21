import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth',
  },
});

// @TODO fix regexp
export const config = {
  matcher: ['/(!api.)*'],
};
