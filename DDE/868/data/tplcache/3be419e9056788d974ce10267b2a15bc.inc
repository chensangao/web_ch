<div class="news-one">
          <div class="news-one-date">
            <p class="day">[field:pubdate function="MyDate('d',@me)"/]</p>
            <p class="month">[field:pubdate function="MyDate('m',@me)"/]</p>
            <p class="year">[field:pubdate function="MyDate('Y',@me)"/]</p>
          </div>
          <div class="news-one-desc">
            <div class="news-one-words">
              <h3><a href="[field:arcurl/]">[field:title/]</a></h3>
              <p class="words">[field:description function="cn_substr(@me,200)"/]...</p>
            </div>
            <a href="[field:arcurl/]" class="link"><span class="more">Read&More</span><img src="/skin/images/news-arrow.png"></a> </div>
        </div>