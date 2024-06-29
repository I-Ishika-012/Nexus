import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Nexus from '../assets/Nexus-main.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  outline: 'none',
  fontFamily: 'Nunito',

}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 , display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', p: 5}}>
      <Grid container spacing={2} fontFamily={'Nunito'}>
        <Grid xs={12} md={5} lg={4}>
          <img src={Nexus} alt="logo" style={{ width: '20%', height: 'auto', fontFamily: 'Nunito' }} />
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4} fontFamily={'Nunito'}>
          <Grid xs={6} lg={3} fontFamily={'Nunito'}>
            <Item fontFamily={'Nunito'}>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold' }}
              >
                General
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2, listStyleType: 'none', padding: 0 }}>
                <li>Sign Up</li>
                <li>Help Center</li>
                <li>About</li>
                <li>Press</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Developers</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold',
                    listStyleType: 'none', padding: 0
                }}
              >
                Browse Nexus
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2, listStyleType: 'none', padding: 0 }}>
                <li>Learning</li>
                <li>Jobs</li>
                <li>Tests</li>
                <li>Salary</li>
                <li>Mobile</li>
                <li>Services</li>
                <li>Products</li>
                <li>Top Companies Hub</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold', listStyleType: 'none', padding: 0 }}
              >
                Business Solutions
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 , listStyleType: 'none', padding: 0}}>
                <li>Talent</li>
                <li>Marketing</li>
                <li>Sales</li>
                <li>Learning</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold', listStyleType: 'none', padding: 0 }}
              >
                Directories
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2, listStyleType: 'none', padding: 0,}}>
                <li>Members</li>
                <li>Jobs</li>
                <li>Companies</li>
                <li>Featured</li>
                <li>Learning</li>
                <li>Posts</li>
                <li>Articles</li>
                <li>Universities</li>
                <li>News Letters</li>
                <li>Services</li>
                <li>Products</li>
                <li>People Search</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 }, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <Item sx={{ fontWeight: 'bold' , fontFamily: 'Nunito'}} >Nexus © Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>About</Item>
            </Grid>
            <Grid>
              <Item>Accessibility</Item>
            </Grid>
            <Grid>
              <Item>User Agreement</Item>
            </Grid>
            <Grid>
              <Item>Privacy Policy</Item>
            </Grid>
            <Grid>
              <Item>Cookie Policy</Item>
            </Grid>
            <Grid>
              <Item>Copyright Policy</Item>
            </Grid>
            <Grid>
              <Item>Brand Policy</Item>
            </Grid>
            <Grid>
              <Item>Guest Control</Item>
            </Grid>
            <Grid>
              <Item>Community Guidelines</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
