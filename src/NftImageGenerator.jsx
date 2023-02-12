import React, { useState } from 'react';
import axios from 'axios';
import './NftImageGenerator.css';

function NFTImageGenerator() {
	const [prompt, setPrompt] = useState('');
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			const apiEndpoint = 'https://api.openai.com/v1/images/generations';
			const apiKey = 'put your openai api key here';
			const model = 'image-alpha-001';
			const size = '1024x1024';

			const response = await axios.post(
				apiEndpoint,
				{
					model,
					prompt,
					size,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${apiKey}`,
					},
				}
			);

			const newImage = {
				id: images.length + 1,
				url: response.data.data[0].url,
				prompt,
			};

			setImages([...images, newImage]);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='nft-image-generator'>
			<form
				onSubmit={handleSubmit}
				className='nft-image-generator__form'>
				<input
					type='text'
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					placeholder='Enter a prompt for the image'
					className='nft-image-generator__input'
				/>
				<button
					type='submit'
					className='nft-image-generator__button'>
					Generate Image
				</button>
			</form>
			{loading ? (
				<p className='nft-image-generator__loading'>Loading...</p>
			) : (
				<div className='nft-image-generator__images'>
					{images.map((image) => (
						<div
							key={image.id}
							className='nft-image-generator__image-container'>
							<p className='nft-image-generator__prompt'>{image.prompt}</p>
							<img
								src={image.url}
								alt='Generated NFT pic'
								className='nft-image-generator__image'
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default NFTImageGenerator;
