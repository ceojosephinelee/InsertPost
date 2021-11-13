import React from 'react'
import '../style/write.scss';

export default function Write() {
    return (
        <>
            글쓰기
          <div className="writebox">
            <form action="writerAction" method="post">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    카테고리
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
	            <input type="hidden" name="bdGroup"></input>
	            <input type="hidden" name="bdOrder"></input>
	            <input type="hidden" name="bdIndent"></input>
	            <input type="text" name="bdTitle" class="form-control mt-4 mb-2"
	            	placeholder="제목을 입력해주세요." required
	            ></input>
	            <div class="form-group">
	            	<textarea class="form-control" rows="10" name="bdContent"
	            		placeholder="내용을 입력해주세요" required
	            	></textarea>
	            </div>
	            <button type="submit" class="btn btn-secondary mb-3">등록</button>
            </form>

          </div>  
            
        </>
    )
}