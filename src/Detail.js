/* eslint-disable */

import React from "react";
// 최근 업데이트된 리엑트와 라우터 5버전 이상에서 사용 가능
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  // 이전 페이지들 이용하고 싶을 때 쓰는 라우터의 훅
  const history = useHistory();
  //:id 루트로 들어온 걸 반영. { 사용자가 입력한 URL 파라미터들 }
  const { id } = useParams();

  return (
    <>
      <div className="Container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                // 라우터의 history + goBack() => 이전페이지로 이동하는 함수. push() => () 안에 들어가는 페이지로 이동!
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
