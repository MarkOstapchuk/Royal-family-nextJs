import '../../components/devTeam/mat.scss'
import styles from './page.module.scss'
import Nav from "@/components/navigation/Nav";
import DayFigure from "@/components/dayFigure/DayFigure";
import DevTeam from "@/components/devTeam/DevTeam";
import {useTranslations} from 'next-intl';
export default function Home() {
    const t = useTranslations('FigureList');
    const int = useTranslations('Interface.Main')
    const tnav = useTranslations('Interface.Nav')
    const rand = Math.round(Math.random() * 4) + 1
    const data = {
            name: t(`${rand}.name`),
            img: `figure_${rand}.jpeg`,
            info: t(`${rand}.info`),
            birthDate: t(`${rand}.birthDate`),
            deathDate: t(`${rand}.deathDate`)
        }
    const keys=['1','2','3','4']
    const teamData = []
    keys.forEach(((item)=>{
        teamData.push({
            name: int(`team.list.${item}.name`),
            nickname: int(`team.list.${item}.nickname`),
            github: int(`team.list.${item}.github`)
        })
    }))

    return (
        <>
            <header>
                <Nav el1={tnav('el1')} el2={tnav('el2')}/>
            </header>
            <main className={styles.main}>
                <div className={styles.backgroundCover}>
                    <h1>{int('intro')}</h1>
                </div>
                <div className={styles.intro}>
                    <div className="wrapper">
                        <h2>{int('about')}</h2>
                    </div>
                </div>
                <section className={styles.day_figure}>
                    <div className="wrapper">
                        <DayFigure text={int('dayFigure')} info={data}/>
                    </div>
                </section>
                <section className={styles.dev_team}>
                    <div className="wrapper">
                        <DevTeam data={teamData} text={int('team.title')}/>
                    </div>
                </section>
            </main>
        </>
    )
}
