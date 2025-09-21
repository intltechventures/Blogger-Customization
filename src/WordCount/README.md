
# Blogger JavaScript Gadget - WordCount

- To count words in a Blogger post, you can use a JavaScript snippet that processes the post content and displays the word count. This can be achieved by adding a custom gadget or directly editing your blog's HTML template.


## Installation:

- Access your Blogger Dashboard: Go to your Blogger account and select the blog you want to modify.

- Go to Layout: Navigate to the "Layout" section in the left-hand menu.

- Add a Gadget (or edit HTML):
  + For a Gadget: Click "Add a Gadget" in the desired location (e.g., at the bottom of your posts). Choose "HTML/JavaScript" and paste the code into the content area.
  + For Direct HTML Editing: Go to "Theme" and then "Edit HTML." Locate the section where you want the word count to appear within your post template (e.g., near the post footer).

- Insert the JavaScript code from the __WorldCount.js__ file


## Explanation of the code:

- ```document.querySelector('.post-body')```
  + This line targets the main content area of your blog post. You might need to inspect your blog's HTML to find the correct class or ID for your post content (e.g., .post-content, #post-body-id).
    
- ```postBody.innerText```
  + Extracts the visible text from the selected element.
    
- ```text.replace(/(<([^>]+)>)/ig, '')```
  + Removes any remaining HTML tags from the extracted text.
    
- ```text.match(/\b\w+\b/g)```
  + Uses a regular expression to find and extract individual words.

- ```words ? words.length : 0;```
  + Calculates the word count based on the extracted words.

- The remaining lines create a new ```<span>``` element to display the word count and insert it into the page.

- After implementing this, your blog posts should display the word count alongside the content.

