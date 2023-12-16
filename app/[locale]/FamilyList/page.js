
import Nav from "@/components/navigation/Nav";
import styles from './page.module.scss'
import './mat.scss'
import FigureList from "@/components/FigureList/FigureList";
import {useTranslations} from "next-intl";

const FamilyList = () => {
    const keys = ['1', '2', '3', '4', '5'];
    const t = useTranslations('FigureList')
    const int = useTranslations('Interface.FigureList')
    const tnav = useTranslations('Interface.Nav')
    const data = []
    keys.forEach((item)=> {
        let obj = {}
        obj.name = t(`${item}.name`)
        obj.id = item
        obj.img = t(`${item}.img`)
        obj.birthDate = t(`${item}.birthDate`)
        obj.deathDate = t(`${item}.deathDate`)
        obj.info = t(`${item}.info`)
        data.push(obj)
    })
    return (
        <>
            <header className={styles.header}>
                <Nav el1={tnav('el1')} el2={tnav('el2')}/>
                <div className={styles.intro}>
                    {int('intro')}
                </div>
            </header>
            <main className={styles.main}>
                <FigureList text1={int('search')} text2={int('button')} data={data}></FigureList>
            </main>
        </>
    );
};

export default FamilyList;