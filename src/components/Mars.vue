<template>
  <div> 
    <!-- 4. สร้าง tag div ที่ทำการสือทอด class hasOpenLoading  ( ตัวโหลดดิ้ง )-->
    <!-- 10. ทำการปิดการใช้งาน class hasOpenLoading  ( ตัวโหลดดิ้ง ) จากคำสั่ง loading.close() ในบรรทัดที่ 44 -->
    <div
      :class="{ hasOpenLoading }">
    </div>
    <!-- 5. สร้าง tag div ขึ้นมาและทำการตรวจสอบเงื่อนไขว่า  hasOpenLoading มีค่าเป็น false หรือไม่ถ้าหากเป็น  false ให้ทำการแสดงข้อมูลภายใน tag -->
    <!-- 11. ทำการตรวจสอบค่า hasOpenLoading ว่าเป็น false หรือไม่ -->
    <div class="row" v-if="hasOpenLoading != true">
    <!-- 12. เนื่องจากเราทำการอัพเดตรค่าของ hasOpenLoading = false ในบรรทัดที่ 47 จึงสามารถทำงาน ชุดคำสั่งตั้งแต่ บรรทัดที่ 11 ถึง 14 ได้ -->
      <div class="col " v-for="item in mars.photos" v-bind:key="item.index">
        <!-- 15. ทำการ เรียกใช้ components ที่มีชื่อว่า card ออกมาแสดงผลอีกครั้งโดยจะวนกระบวนการทำงานแบบนี้ไปเรื่อยๆจนกว่าจะแสดงข้อมูลของ mars.photos ออกมาจนครบทั้งหมด -->
        <!-- 13. ทำการสรา้ง  loop โดยการเรียกใช้ค่าจากตัวแปร  mars.photos ออกมาใช้งานโดยมี item เป็น data -->
        <card :data = "item" id="cardMars" /> 
        <!-- 14. เรียกใช้ components ที่มีชื่อว่า card ออกมาแสดงผล โดยส่งค่าของ item ผ่านตัวแปรที่ชื่อว้่า  data  เข้าไปใน card-->
      </div>
    </div>
  </div>
  <!-- จบขขึ้นตอนที่ 5. -->
</template>

<script>
import card from './Card'
export default {
  data() {
    return {
      mars: "",
      hasOpenLoading: true,
    };
  },
  components: {
    card
  },
  methods: {
  // 2.
  // ทำ ฟังก์ชั่น fetchMars โดยรับค่า type มากจากตอน created ทำให้้ type มีค่าเท่ากับ 'corners'
    fetchMars: function (type) {
      const loading = this.$vs.loading({ // สร้างตัวแปร loading ขึ้นมาใีหน้าที่แสดง loading รอระหว่างการ Download ข้อมูลจาก api
            type // มีค่าเท่ากับ 'corners'
          })
  // 3. async function ทำการเรียกใช้ axios เพิ่อดึงข้อมูลจาก api
      this.axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=p1v9iusZJSsWsj5taNVjJIfAGOg9mdzezScnD7G1&fbclid=IwAR2ELljNBooebWE-Wxr09YjVnqZKCSLCjn8bAYPTW-DkUWY0pwF8BHo9SJg"
        )
        .then((res) => { // 6. หลังจากทำการดาวน์โหลดข้อมูลจาก api เสร็จสิ้นให้ทำการเก็บข้อมูลที่ได้ไว้ในตัวแปรที่ชื่อ res
          this.mars = res.data; // 7. ทำการ update ข้อมูลของตัวแปร mars ที่ทำการสร้างไว้ใน data ให้มีค่าเท่ากับ res.data
          loading.close() // 8. ทำการปิดการทำงานของ loading
          this.hasOpenLoading = false // 9. ทำการ update ข้อมูลของตัวแปร hasOpenLoading ที่ทำการสร้างไว้ใน data ให้มีค่าเท่ากับ false
        });
    }
  },
  // 1.
  created() {
  // เรียกใช้ ฟังกชั่น fetchMars ใน methods โดยส่งค่า type = 'corners'
    this.fetchMars('corners');
  },
};
</script>

<style >
#cardMars {
  padding : 20px;
}
</style>

<style scoped lang="stylus">
    .hasOpenLoading
      .box-loading
        opacity 0
        transform scale(.7)
    .box-loading
      width 120px
      height 120px
      position relative
      margin 5px
      border-radius 20px
      box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
      overflow hidden
      cursor pointer
      transition all .25s ease
      &:hover
        transform translate(0,-5px)
        box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
      >>>.vs-loading
        padding 0px
  </style>