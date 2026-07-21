from fastapi import APIRouter
from app.schemas.review_schema import CodeReviewRequest
from app.services.review_service import ReviewService

router = APIRouter()

service = ReviewService()


# ----------------------------
# Review Code
# ----------------------------
@router.post("/review")
def review_code(request: CodeReviewRequest):

    result = service.review(
        code=request.code,
        language=request.language
    )

    return {
        "review": result
    }


# ----------------------------
# Fix Code
# ----------------------------
@router.post("/fix")
def fix_code(request: CodeReviewRequest):

    result = service.fix_code(
        code=request.code,
        language=request.language
    )

    return {
    "result": result
}

@router.post("/explain")
def explain_code(request: CodeReviewRequest):

    result = service.explain_code(
        code=request.code,
        language=request.language
    )

    return {
        "explanation": result
    }

@router.post("/tests")
def generate_tests(request: CodeReviewRequest):

    result = service.generate_tests(
        code=request.code,
        language=request.language,
    )

    return {
        "tests": result
    }        