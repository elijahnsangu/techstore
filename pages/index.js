import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import Link from '../src/Link';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        </Box>
      </Container>
    </div>
  );
}
