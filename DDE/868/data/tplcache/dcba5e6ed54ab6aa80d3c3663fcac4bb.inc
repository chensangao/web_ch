<div class="index-news-list">
      <h3>{dede:field name='typename'/}</h3>
      {dede:arclist row='3' titlelen='50' orderby='pubdate'}
      <div class="index-news-one"><a class="inews-one-l" href="[field:arcurl/]">[field:title/]</a> <span class="inews-one-r">[[field:pubdate function="MyDate('Y-m-d',@me)"/]]</span> </div>
      {/dede:arclist} </div>