<template>
  <div class="page">
    <ol class="page-list">
      <li>首页</li>
      <li class="one">1</li>
      <li><a href="">2</a></li>
      <li><a href="">3</a></li>
      <li><a href="">下一页</a></li>
      <li><a href="">末页</a></li>
      <li>
        <span>
          共
          <strong>43</strong>
          页
          <strong>845</strong>
          条
        </span>
      </li>
    </ol>
  </div>
</template>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  color: #999;
}
.page {
  text-align: center;
  font-weight: normal;
  margin-top: 65px;
  padding-bottom: 45px;
}
li {
  display: inline-block;
  border: 1px solid #cccccc;
  font-size: 12px;
  color: #999;
  padding: 2px 5px;
}
li a {
  display: inline;
  font-size: 12px;
  color: #999;
}
.one {
  background-color: #eee;
  color: #ff0000;
}
</style>

