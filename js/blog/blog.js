const blogs = [
    {
        id: 'post1',
        title: 'First post..',
        date: '2026-03-01',
        md: `
# First post in my new *BLOG*

Actually, I dont even know what to write here. It’s 03.01.2026 now… yeah. I think I’ll split the posts into several topics,

- WEBSITE
> I find this cool site called **neocities.org** on 31.12.25, when i was looking for a free host for my ARG, lol. 
In the first day i maked template with horrible design but with some cool features like microblog.
>
> The second day was much better. I found a cool [website](https://hello-room.neocities.org/home),  
 and it inspired me to create a status line displaying my online/offline state using Python and the Neocities API.  
 You can check out the code on my [GitHub](https://github.com/Gibsy/WebPCStatus).  
 I also added a few small things: a couple of extra pages, a meme paperclip with a tips, a few _easter eggs_, and a visitor counter. I found an interesting project with a virtual oscilloscope/vectorscope and slightly modified it for my own use. The demo link is also available on my GitHub.
>	
> The third day (today) was the most productive one so far. It’s 7 PM now, and I’ve been working on my website for about 5 hours straight. I added application icons - only one of them works for now, and that’s the **blog**. Tomorrow, I’ll focus on the others more seriously. I also made a really cool taskbar that displays my local time. That’s all for now!!

UPD: 06.01.2026, I updated website previev, cuz previous one was so ahh


![image](https://i.ibb.co.com/Ldygpwbb/firefox-N3-VNm-Bivkz.png)
*Website status 06.01.2026*

- MOOD
> 5/10.
>
        `
    },
	
	{
        id: 'post2',
        title: 'micro update',
        date: '2026-16-01',
        md: `
# second micropost

Actually, I dont even know what to write here. It’s 03.01.2026 now… yeah. I think I’ll split the posts into several topics,

- WEBSITE
> I wouldn't say I've done everything I wanted, but at least I've gotten something done: fixed a ton of bugs and added a couple of pages I designed. These days, almost all my free time goes to studying and prepping for exams :( Still trying to work on the site as much as I can.
>
> I started learning Python more in depth, got the basics down, and began writing my first fun scripts. I’ve made a couple of Telegram bots and have a lot of ideas for the future. I also started learning JavaScript and built my first web apps using Neutralino.js. Overall, it’s coming along pretty smoothly for me. 
>	
![image](https://i.ibb.co.com/qFdc9rCm/image.png)
>
↑ my mp3 player made with neutralino, here is [Github repo](https://github.com/Gibsy/player) ↑
>
> Aand thast all. I have nothing to say more.
>
- MOOD
> 6/10
        `
    },
	
		
];

const nav = document.getElementById('nav');
blogs.forEach(blog => {
    const h3 = document.createElement('h3');
    h3.textContent = blog.title;
    h3.addEventListener('click', () => showPost(blog.id));
    nav.appendChild(h3);

    const date = document.createElement('small');
    date.textContent = blog.date;
    nav.appendChild(date);

    const postDiv = document.getElementById(blog.id);
    postDiv.innerHTML = marked.parse(blog.md);
});

function showPost(id) {
    document.querySelectorAll('.blog-post').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

if (blogs.length > 0) {
    showPost(blogs[0].id);
}