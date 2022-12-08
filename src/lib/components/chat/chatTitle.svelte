<script>
  export let roomInfo;
  export let id;

  const displayDate = (date) => {
    const dbDate = new Date(date);
    const currentDate = new Date();

    if (dbDate.getFullYear() === currentDate.getFullYear()) {
      if (dbDate.getMonth() === currentDate.getMonth() && dbDate.getDate() === currentDate.getDate()) {
        return `${dbDate.getHours()}시 ${dbDate.getMinutes()}분`;
      } else {
        return `${dbDate.getMonth()}월 ${dbDate.getDate()}일`;
      }
    } else {
      return `${dbDate.getFullYear()}년 ${dbDate.getMonth()}월 ${dbDate.getDate()}일`;
    }
  }
</script>

<a href={`/chat/${id}`} class="chatBody">
  <div class="chatLeft">
    <div class="oponentImage">
      {roomInfo.oponentProfileImage}
    </div>
  </div>
  <div class="chatMiddle">
    <div class="oponentName">
      {roomInfo.oponentName}
    </div>
    <div class="recentMessage">
      {roomInfo.recentMessage}
    </div>
  </div>
  <div class="chatRight">
    <div class="recentActive">
      {displayDate(roomInfo.recentActive)}
    </div>
  </div>
</a>

<style>
  .chatBody {
    border-top: 2px solid #cdcdcd;
    border-bottom: 2px solid #cdcdcd;
    height: 85px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-direction: row;
    padding-right: 15px;
  }
  .chatLeft {
    padding: 15px 10px;
    width: 80px;
    box-sizing: border-box;
  }
  .oponentImage {
    width: 55px;
    height: 55px;
    background-color: #cdcdcd;
    border-radius: 50%;
  }
  .chatMiddle {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    justify-content: space-between;
    flex-grow: 1;
  }
  .oponentName {
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    vertical-align: center;
    font-weight: bold;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .recentMessage {
    height: 15px;
    line-height: 15px;
    font-size: 13px;
    color: #888;
  }
  .chatRight {
    width: 60px;
    display: flex;
    align-items: center;
  }
  .recentActive {
    color: #bbb;
    font-size: 13px;
  }
</style>