CREATE DATABASE homepage;

USE homepage;

-- CREATE user();

CREATE TABLE board(
  idx int auto_increment primary key,
  title varchar(40) not null,
  content text not null,
  date timestamp not null,
  hit int not null
);

INSERT INTO board(idx, title, content, date, hit) VALUES(1, '김성호', '안녕하세요', CURRENT_TIMESTAMP, 0)

-- 테이블 개수

-- 깃헙에 커밋하고 내려 받아서 db에 파일경로로 설치하기 

-- source [파일경로]

