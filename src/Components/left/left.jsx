import './left.css';
import React from 'react';

const Left = () => {
	return (
		<div className = 'leftpane'>
			<div className ='left' >
				<div className = 'leftimg'>
					<img src = "store__bfv-trending-image - 01.png" alt = "" title = 'Battlefield-1'/>
					<img src = "career__BF1-image.png" alt = "" title = 'Battlefield-2'/>
					<img src = "career__BF4-image.png" alt = "" title = 'Battlefield-3'/>
					<img src = "BF1__home-watch-image - 02.png" alt = "" title = 'Battlefield-4' />
					<img src = "career__player-picture.png" alt = "" title = 'Battlefield-5'/>
					<img src = "video.png" alt = "" title = 'videos'/>
					<img src = "news.jpg" alt = "" title = 'News'/>
				</div>
				<div className = 'help'>
					<img src='question.jpeg' alt = ''title = 'help'/>
					<img src = 'quit.png' alt = ''title = 'quit from the game'/>
				</div>
			</div>
		</div>


	);

}

export default Left