import Image from "next/image";
import styles from "./page.module.css";
import "./../globals.css";
import "./ab.css";

export default function page() {
    return (<div>
    <center><h1 style={{color: "#0a0a0a", fontWeight: "bold", fontSize: "30px", textAlign: "center", margin: "20px"}}>About Me</h1></center>
    <div className="container">
    <div className="img">
    <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/329039839_5983305018400346_824765189773174527_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEJbl7YVo300zipp76NnQxobtR297p2V81u1Hb3unZXzbUnBXXuOCpM5IC6R0YlFlen50bcgnU1HAe1q9THTVMB&_nc_ohc=Z_CPpMCoEMsQ7kNvgG-JBli&_nc_ht=scontent.fbkk5-6.fna&oh=00_AYAYtP8JvQmxdncJQIC4PG32ca5P27VpfLNGDBmMQnXZnA&oe=66D212D2" alt="image" width={300} height={300}/>
    </div>
        <div className="info">
        <h1 style={{color: "#0a0a0a", fontWeight: "bold", fontSize: "30px", textAlign: "center", margin: "20px"}}>Info</h1>
        <p>ชื่อ : นาย ภานุวัฒน์ ธรรมบุตร</p>
        <p>สาขา : วิทยาการคอมพิวเตอร์และสารสนเทศ</p>
        <p>รหัสประจำตัว : 653450099-8</p>
        </div>
    </div>
    </div>
    );
}