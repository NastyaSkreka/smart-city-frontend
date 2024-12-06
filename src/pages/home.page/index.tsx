import { useEffect, useState } from "react";
import api from "../../api/api";
import BannerComponent from "../../components/home.page.components/banner.component";
import NewsComponent from "../../components/home.page.components/news.component";
import QuickAccessComponent from "../../components/home.page.components/quick.access.component";
import TopServicesComponent from "../../components/home.page.components/top.services.component";
import EventsComponent from "../../components/home.page.components/events.component";
import MapComponent from "../../components/home.page.components/map.component";


function HomePage() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/api/test'); 
          setData(response.data);
        } catch (err:any) {
          setError(err.message);
        }
      };
  
      fetchData();
    }, []);

    console.log(data)

    return (
      <>
        <BannerComponent/>
        <TopServicesComponent/>
        <NewsComponent/>
        <QuickAccessComponent/>
        <EventsComponent/>
        <MapComponent/>
      </>
    )
}

export default HomePage;