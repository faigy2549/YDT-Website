using Entities;

namespace Services
{
    public interface IEventService
    {
        Task AddAsync(Event eventEntity);
        Task DeleteAsync(int id);
        Task<IEnumerable<Event>> GetAllAsync();
        Task<Event> GetByIdAsync(int id);
        Task UpdateAsync(Event eventEntity);
    }
}