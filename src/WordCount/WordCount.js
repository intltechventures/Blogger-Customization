<script type='text/javascript'>
    function countWordsInPost() {
        var postBody = document.querySelector('.post-body'); // Adjust selector if needed
        if (postBody) {
            var text = postBody.innerText; // Get text content
            text = text.replace(/(<([^>]+)>)/ig, ''); // Remove HTML tags
            var words = text.match(/\b\w+\b/g); // Match whole words
            var wordCount = words ? words.length : 0;
            
            var wordCountElement = document.createElement('span');
            wordCountElement.innerHTML = '<strong>Word count:</strong> ' + wordCount;
            postBody.parentNode.insertBefore(wordCountElement, postBody.nextSibling); // Insert after post body
        }
    }
    // Run the function when the page loads
    window.onload = countWordsInPost;
</script>
