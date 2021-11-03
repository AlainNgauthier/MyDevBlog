import client from 'graphql/client';
import { GET_ABOUT } from 'graphql/queries';
import AboutTemplate from 'templates/About';

// type AboutProps = {

// }


export default function About() {
    return <AboutTemplate />
}

// export const getStaticProps = async () => {
//     const { abouts } =   await client.request(GET_ABOUT);
//     console.log(abouts);

//     return {
//         props: {
//             data: abouts
//         }
//     }
// }
