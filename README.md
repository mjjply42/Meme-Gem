# Meme-Gem
Meme-Gem is a meme generator built in React. This is a personal project to practice ReactJS and become fluent in its practices. This lacks any real style.

# Usage
To use this project, you must have node installed on your machine.
- At your Terminal, go the root of the directory for this project and type

```
npm start
```
The project will automatically load to:

```
localhost:3000
```
The project utilizes a MemeAPI for the gathering of the image and imge data, for each "pre-text" meme.
 
 ```javascript
 componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ memeArr: memes })
                const rand_id = Math.floor(Math.random() * Math.floor(this.state.memeArr.length))
                this.setState({meme: this.state.memeArr[rand_id].url})
            })
    }
   ```
   There is a list of ***100 memes*** that the API currently had at the time of making this project.
