'use client'
import styles from "@/app/[locale]/FamilyList/page.module.scss";
import {Avatar, Button, Card, TextField} from "@mui/material";
import {useState} from "react";
import {useRouter} from '/navigation';

const FigureList = ({text1, text2, data}) => {
    const [search, setSearch] = useState('')
    const router = useRouter();
    const searchFilter = (array) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(search.toLowerCase())
        )
    }
    const filtered = searchFilter(data)
 return (
     <div className="wrapper">
         <div className={styles.search}>
             <TextField id="standard-basic" fullWidth label={text1} variant="standard"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}/>
         </div>
         <div className={styles.list}>
             {filtered.map((item, index) => (
                 <Card sx={{padding: '30px 20px',
                     width: '18%'}} variant="outlined" key={index}>
                     <Avatar variant="square" alt={item.name} sx={{width: 160, height: 160}} src={`/figureList/${item.img}`}/>
                     <div style={{margin: '20px 0', height: '60px'}}>{item.name}</div>
                     <Button sx={{color: '#fff', backgroundColor: '#333', '&:hover': {
                             backgroundColor: '#fff',
                             color: '#222',
                         }}} variant="contained" onClick={()=>{
                         router.push(`/FamilyList/${item.id}`);
                     }}>{text2}</Button>
                 </Card>
             ))}
         </div>
     </div>
 );
};

export default FigureList;