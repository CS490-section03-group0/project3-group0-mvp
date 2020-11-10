from server import app, db

from server.models.user import User
from server.models.transaction import Transaction

@app.route("/api/profileview/<username>")
def get_profile_view(username):
    user_profile = (
        db.session.query(User)
        .filter(User.username == username)
        .one()
    )
    user_id = user_profile.id
    total_tickets = (
        db.session.query(db.func.sum(Transaction.ticket_amount))
        .filter(Transaction.user_id == user_id)
        .scalar()
    )
    return {
        "name": user_profile.name,
        "username": user_profile.username,
        "registration_datetime": user_profile.registration_datetime,
        "total_tickets": total_tickets
    }
