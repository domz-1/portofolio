import { Link, Stack  , Typography} from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import Social from './../components/Social';

    export default function Contact () {
    return (
        <Stack className='Contact' id="contact">
            <SectionTitle title="Get In Touch" body="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."/>
            <Link href="mailto:adhamabnabih@gmail.com">
            <Typography variant="h4">
            adhamabnabih@gmail.com
            </Typography>
            </Link>
            <Link href="tel:+201027690928">
            <Typography variant="h4">
            +201027690928
            </Typography>
            </Link>
            <Social/>
        </Stack>
    );
    }
