import { Link, Stack  , Typography} from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import Social from './../components/Social';

    export default function Contact () {
    return (
        <Stack className='Contact' id="contact">
            <SectionTitle title="Get In Touch" body="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."/>
            <Link href="mailto:adhamabuelenin@std.mans.edu.eg">
            <Typography variant="h4">
            adhamabuelenin@std.mans.edu.eg
            </Typography>
            </Link>
            <Link href="tel:adhamabuelenin@std.mans.edu.eg">
            <Typography variant="h4">
            +201027690928
            </Typography>
            </Link>
            <Social/>
        </Stack>
    );
    }
