'use client'

import React, {useState} from 'react';
import {MenuItem, Select} from "@mui/material";
import styles from './Nav.module.scss'
import {useRouter,usePathname, Link} from '/navigation';
import {usePathname as usePath} from 'next/navigation'

const Nav = ({border = true, el1, el2}) => {
    const nextPath = usePath().substring(1,3);
    const [stateLocale, setStateLocal] = useState(nextPath);
    const router = useRouter();
    const pathname = usePathname();
    function switchLanguage(e) {
        router.replace(pathname, {locale: e.target.value});
        setStateLocal(e.target.value)
    }

    return (
        <div style={{borderBottom: border ? '2px solid #fff' : 'none'}} className={styles.nav}>
            <ul>
                <li><Link href={'/'}>{el1}</Link></li>
                <li><Link href={'/FamilyList'}>{el2}</Link></li>
                <li><Select sx={{border: 'none'}} value={stateLocale} onChange={switchLanguage}>
                    <MenuItem value={'en'}>en</MenuItem>
                    <MenuItem value={'ru'}>ru</MenuItem>

                </Select></li>
            </ul>

        </div>
    );
};

export default Nav;