import React from 'react'
import { Chip, Container, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Details = () => {
  return (
    <section>
<Stack
    direction="column"
    justifyContent="center"
    alignItems="stretch"
    spacing={2}
    sx={{ p: 5,  display: 'flex', flexWrap: 'wrap', gap: 1.5, padding: 5}}
>
    <Typography variant="h4" fontFamily={'Nunito'} fontWeight={600} color={'#576cbc'}>Explore Collaborative Articles</Typography>
    <Typography variant="h6" fontFamily={'Nunito'} fontWeight={400} color={'primary.default'}>We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.</Typography>
    <Container width="100%" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, padding: 5 }}>
      <Chip
        label="Marketing"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        //font size
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="Public Administration"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="Healthcare"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="Engineering"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="IT Services"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="Sustainability"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="Business Administration"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="Telecommunications"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="HR Management"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10 }}
      />
      <Chip
        label="Show All"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, color: 'info.main', borderColor: 'info.main'}}
      />
      </Container>
</Stack>
 <Stack
 direction="column"
 justifyContent="center"
 alignItems="stretch"
 spacing={2}
 sx={{ p: 5,  display: 'flex', flexWrap: 'wrap', gap: 1.5, padding: 5}}
>
 <Typography variant="h4" fontFamily={'Nunito'} fontWeight={600} color={'#576cbc'}>Find The Right Job Or Internship For You</Typography>
 <Typography variant="h6" fontFamily={'Nunito'} fontWeight={400} color={'primary.default'}>Suggested Searches</Typography>
 <Container width="100%" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, padding: 5 }}>
     <Chip
        label="Engineering"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10,}}
    />
    <Chip
        label="Business Development"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10,}}
    />
    <Chip
        label="Finance"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, }}
    />
    <Chip
        label="Marketing"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, }}
    />
    <Chip
        label="Administrative Assistant"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, }}
    />
    <Chip
        label="Information Technology"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10,}}
    />
    <Chip
        label="Human Resources"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, }}
    />
    <Chip
        label="Retail Associate" 
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, }}
    />
    <Chip
        label="Customer Service"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10,}}
    />
    <Chip
        label="Operations"
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10,}}
    />
    <Chip
        label="Show All"
        icon={<ExpandMoreIcon />}
        component="a"
        href="#basic-chip"
        variant="outlined"
        color="default"
        clickable
        sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, color: 'info.main', borderColor: 'info.main' }}
    />
</Container>
</Stack>
 <Stack
 direction="column"
 justifyContent="center"
 alignItems="stretch"
 spacing={2}
 sx={{ p: 5,  display: 'flex', flexWrap: 'wrap', gap: 1.5, padding: 5, backgroundColor: '#f5f5f5'}}
>
 <Typography variant="h4" fontFamily={'Nunito'} fontWeight={600} color={'secondary.dark'} >Post Jobs For Millions Of People To Find</Typography>
 <Chip
    label="Post A Job"
    component="a"
    href="#basic-chip"
    variant="outlined"
    color="default"
    clickable
    sx={{ fontSize: 20, padding: 4, width: 300, borderRadius: 10, alignSelf: 'start', color: 'info.main' , borderColor: 'info.main' }}
/>
</Stack>
 <Stack
 direction="column"
 justifyContent="center"
 alignItems="stretch"
 spacing={2}
 sx={{ p: 5,  display: 'flex', flexWrap: 'wrap', gap: 1.5, padding: 5,}}
>
 <Typography variant="h4" fontFamily={'Nunito'} fontWeight={600} color={'#576cbc'}>Discover The Best Software Tools</Typography>
</Stack>
 <Stack
 direction="column"
 justifyContent="center"
 alignItems="stretch"
 spacing={2}
 sx={{ p: 5,  display: 'flex', flexWrap: 'wrap', gap: 1.5, padding: 5,}}
>
 <Typography variant="h4" fontFamily={'Nunito'} fontWeight={600} color={'#576cbc'}>Keep Your Mind Sharp With Our Tests</Typography>
</Stack>
</section>
  )
}

export default Details