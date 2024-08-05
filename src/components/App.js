import React, { useEffect, useState } from 'react'
import './../styles/App.css'

const App = () => {
	const [status, setStatus] = useState('idle')
	const [data, setData] = useState('')
	const [error, setError] = useState(null)

	useEffect(() => {
		setStatus('loading')
		fetch('https://dummyjson.com/products')
			.then((response) => response.json())
			.then((data) => {
				setData(data)
				setStatus('success')
				setError(null)
			})
      .catch((error) => {
        setData('')
				setStatus('error')
				setError(error)
			})
	}, [])

	return (
		<div>
			{/* Do not remove the main div */}
			{status === 'loading' && <p>Loading...</p>}
			{data && <h1>{JSON.stringify(data, null, 2)}</h1>}
			{status === 'error' && error && <p>Error: {error.message}</p>}
		</div>
	)
}

export default App
