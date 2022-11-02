export default (function() {
    const container = document.getElementById("container");
    container.innerHTML = `<form action="">
    <h1>Choose your Name</h1>
    <div class="form-control">
        <select name="dropdown" id="dropdown">
            <option value="">select</option>
            <option value="tejas">Tejas</option>
            <option value="aditya">aditya</option>
            <option value="anil">anil</option>
            <option value="ravi">ravi</option>
            <option value="ram">ram</option>
            <option value="sham">sham</option>
            
        </select>
        <button type="submit" id="btn">submit</button>
        </div>
        <p id="p"></p>
</form>`
})()