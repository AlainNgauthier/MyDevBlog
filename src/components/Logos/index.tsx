import LinkedinLogo from '../../../public/svg/linkedin.svg';
import GithubLogo from '../../../public/svg/github.svg';
import TwitterLogo from '../../../public/svg/twitter.svg';
import InstagramLogo from '../../../public/svg/instagram.svg';

type LogoProps = {
    name: string
    fill: string
}

const LogoWrapper: any = ({ name, fill }: LogoProps) => {
    return (name === 'Twitter') ? <GithubLogo fill={fill} /> 
        : (name === 'Instagram') ? <LinkedinLogo fill={fill} /> 
        : (name === 'Linkedin') ? <TwitterLogo fill={fill} /> 
        : (name === 'Github') ? <InstagramLogo fill={fill} />
        : '';
}

export default LogoWrapper;