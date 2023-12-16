import styles from './devTeam.module.scss'
import {Avatar, Card, Link} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const DevTeam = ({text,data}) => {

    return (
        <div className={styles.box}>
            <h2>{text}</h2>
            <div>
                {data.map((item, index) => (
                    <Card variant="outlined" key={index} sx={{width: '21%'}}>
                        <Avatar
                            alt={item.name}
                            sx={{width: 100, height: 100}}
                            src={`/dev_team/team_icon_${index+1}.jpeg`}
                        />
                        <div style={{marginTop: '20px'}}>{item.name}</div>
                        <div style={{margin: '20px 0px'}}>{item.nickname}</div>
                        <Link color='inherit'  href={item.github}
                              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <GitHubIcon style={{marginRight: '10px'}}/>
                            <div >github</div>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DevTeam;