import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { FloatButton } from "../../shared/FloatButton";
import s from "./ItemSummary.module.scss";
export const ItemSummary = defineComponent({
  props: {
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  setup() {
    const router = useRouter();
    const onClickAddItemButton = () => {
      router.push("/items/create");
    };
    return () => (
      <div class={s.wrapper}>
        <ul class={s.total}>
          <li>
            <span>收入</span>
            <span>128</span>
          </li>
          <li>
            <span>支出</span>
            <span>99</span>
          </li>
          <li>
            <span>净收入</span>
            <span>29</span>
          </li>
        </ul>
        <ul class={s.list}>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>2000-01-01 12:39</div>
            </div>
          </li>
        </ul>
        <div class={s.more}>向下滑动加载更多</div>
        <FloatButton onClick={onClickAddItemButton} />
      </div>
    );
  },
});
