import * as React from 'react'
import { Box, Container, Grid, Paper, createTheme, ThemeProvider, Button, Typography, Link } from '@mui/material/'
import { ChevronRight } from '@mui/icons-material/'

// import { createMuiTheme } from '@material-ui/core/styles';

export default function Home() {
    // const theme = createTheme({
    //     typography: {
    //         h1: {
    //             fontSize: 30,
    //         },
    //         h2: {
    //             fontSize: 24,
    //         },
    //     },
    // });

    return (
    <React.Fragment>
        {/* <ThemeProvider theme={theme}> */}
            <Container>
                <Typography variant="h2" align="center">Shop By Category</Typography>
            </Container>
            <Container>
                <Box align="center">
                    <Typography variant="h2" component="h4">We protect people and the businesses they run.™</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur. Risus vitae sodales pretium amet lectus vehicula morbi aliquam at. Vel velit aliquam sit posuere lacus mattis. Semper enim interdum mauris dignissim vitae consectetur. Lacinia luctus cras non in sit elit diam.</Typography>
                    <Link href="#0">Learn More About J. J. Keller</Link>
                </Box>
            </Container>
            <Container>
                <Typography variant="h2" align="center">J. J. Keller Professional Services</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={1} sm={6}>
                            <Box component="img" alt="image" src="https://placekitten.com/522/348" xs={{ width: 522, height: 348, }} />
                        </Grid>
                        <Grid item xs={1} sm={6}>
                            <Typography variant="overline" display="block" gutterBottom>Lorem ipsum dolor sit</Typography>
                            <Typography variant="h3" gutterBottom>Fleet & Transportation</Typography>
                            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet consectetur. In eget sed amet odio gravida orci phasellus. Arcu arcu ultrices amet rutrum feugiat et lectus quam.</Typography>
                            <Button variant="contained" endIcon={<ChevronRight />}>Learn More</Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" direction="row-reverse" spacing={2}>
                        <Grid item xs={1} sm={6}>
                            <Box component="img" alt="image" src="https://placekitten.com/522/348" xs={{ width: 522, height: 348, }} />
                        </Grid>
                        <Grid item xs={1} sm={6}>
                            <Typography variant="overline" display="block" gutterBottom>Lorem ipsum dolor sit</Typography>
                            <Typography variant="h3" gutterBottom>Environmental Health & Safety</Typography>
                            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet consectetur. In eget sed amet odio gravida orci phasellus. Arcu arcu ultrices amet rutrum feugiat et lectus quam.</Typography>
                            <Button variant="contained" endIcon={<ChevronRight />}>Learn More</Button>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={1} sm={6}>
                            <Box component="img" alt="image" src="https://placekitten.com/522/348" xs={{ width: 522, height: 348, }} />
                        </Grid>
                        <Grid item xs={1} sm={6}>
                            <Typography variant="overline" display="block" gutterBottom>Lorem ipsum dolor sit</Typography>
                            <Typography variant="h3" gutterBottom>Human Resources</Typography>
                            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet consectetur. In eget sed amet odio gravida orci phasellus. Arcu arcu ultrices amet rutrum feugiat et lectus quam.</Typography>
                            <Button variant="contained" endIcon={<ChevronRight />}>Learn More</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        {/* </ThemeProvider> */}
    </React.Fragment>
  )
}
