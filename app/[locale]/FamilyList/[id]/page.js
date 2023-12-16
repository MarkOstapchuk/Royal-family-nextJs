import {useTranslations} from "next-intl";
import TimeLine from "@/components/timeline/TimeLine";
import Nav from "@/components/navigation/Nav";
import styles from './page.module.scss'
import Carousel from "@/components/carousel/Carousel";

const Figure = ({params}) => {
    const t = useTranslations(`FigureList.${params.id}`)
    const tnav = useTranslations('Interface.Nav')

    const bioCount = t('bioCount')
    const keys = []
    for (let i = 1; i <= bioCount; i++) {
        keys.push(i)
    }
    const data = []
    keys.forEach((item) => {
        let obj = {}
        obj.text = t(`bio.${item}.text`)
        obj.date = t(`bio.${item}.date`)
        data.push(obj)
    })

    function calcDate(birthDate, deathDate) {
            return birthDate + ' ----- ' + deathDate
    }

    return (
        <>
            <header className={styles.header}>
                <Nav border={false} el1={tnav('el1')} el2={tnav('el2')}/>
            </header>
            <div className="wrapper">
                <div className={styles.info}>
                    <img width={200} src={`/figureList/${t('img')}`}/>
                    <div>
                        <h3>{t('name')}</h3>
                        <h4>{calcDate(t('birthDate'), t('deathDate'))}</h4>
                    </div>
                </div>
            </div>
            <section className={styles.timeline}>
                <TimeLine data={data}/>
            </section>
            <section className={styles.slider}>
                <Carousel dir={t('photos')} count={t('photosCount')}>

                </Carousel>
            </section>
            <section className={styles.last}>
                <div className="wrapper">
                    <div className={styles.wrap}>
                        <div className={styles.video}>
                            <iframe width="100%" height="315px" src={t('video')} title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={styles.map}>
                            <iframe
                                height="315px" width="100%"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.9360076169296!2d4.3038828766545425!3d52.080894771949325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72fdfe99ded%3A0x8ff1e6b1c0cb564a!2sNoordeinde%20Palace!5e0!3m2!1sru!2sby!4v1702668229725!5m2!1sru!2sby"
                                style={{border: '0'}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Figure;