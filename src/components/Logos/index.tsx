import LinkedinLogo from '../../../public/svg/linkedin.svg';
import GithubLogo from '../../../public/svg/github.svg';
import TwitterLogo from '../../../public/svg/twitter.svg';
import InstagramLogo from '../../../public/svg/instagram.svg';

type LogoProps = {
    name: string
    fill: string
}

const LogoWrapper: any = ({ name, fill }: LogoProps) => {
    return (name === 'Github') ? <GithubLogo fill={fill} /> 
        : (name === 'Linkedin') ? <LinkedinLogo fill={fill} /> 
        : (name === 'Twitter') ? <TwitterLogo fill={fill} /> 
        : (name === 'Instagram') ? <InstagramLogo fill={fill} />
        : '';
}

export default LogoWrapper;