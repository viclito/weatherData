import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'

const fetchTable = async (id) => {
    const response = await axios.get(`https://tatacoffee.deepflow.in/api/data/list/?limit=20&offset=${id}`)
    return response.data
}

const Table = () => {
    const [offsetValue, setOffsetValue] = useState(0)
    const { data, isError, isLoading } = useQuery(['table', offsetValue], () => fetchTable(offsetValue), {
        keepPreviousData: true
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error fetching data</div>
    return (
        <div className='table'>
            <h1>Weather Data List</h1>

            <div className='details'>
                <div className="heading">
                    <h3>Id</h3>
                    <h3>Temperature</h3>
                    <h3>Humidity</h3>
                    <h3>Pressure</h3>
                    <h3>Direction</h3>
                    <h3>Angle</h3>
                    <h3>Speed</h3>
                    <h3>Rainfall</h3>
                </div>
                {data.results.map((item, i) => (
                    <div className='rows' key={i}>
                        <h4>{item.id}</h4>
                        <h4>{item.temperature}</h4>
                        <h4>{item.humidity}</h4>
                        <h4>{item.pressure}</h4>
                        <h4>{item.direction}</h4>
                        <h4>{item.angle}</h4>
                        <h4>{item.speed}</h4>
                        <h4>{item.rainfall}</h4>
                    </div>
                ))}
            </div>
            <div className="button">
            <button onClick={()=>setOffsetValue(prev => prev-20)} disabled={offsetValue === 0}>prev</button>
            <button onClick={()=>setOffsetValue(prev => prev+20)}>next</button>
            </div>
            
        </div>
    )
}

export default Table
